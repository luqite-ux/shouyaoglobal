"use client"

import { useState, type FormEvent } from "react"
import { useSearchParams } from "next/navigation"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { InquiryCaptchaField } from "@/components/inquiry-captcha-field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getAllProducts } from "@/lib/products"
import { resolveLocalizedText } from "@/lib/i18n"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function InquiryForm() {
  const searchParams = useSearchParams()
  const preselectedProduct = searchParams.get("product") ?? undefined
  const products = getAllProducts()
  const [status, setStatus] = useState<FormStatus>("idle")
  const [captchaRefreshKey, setCaptchaRefreshKey] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const form = event.currentTarget
      const formData = new FormData(form)
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(formData),
          subject: formData.get("product")
            ? `Product inquiry: ${formData.get("product")}`
            : "Website inquiry",
          message: [formData.get("message"), formData.get("requirements")]
            .filter(Boolean)
            .join("\n\nRequirements: "),
        }),
      })
      const result = (await response.json().catch(() => ({}))) as { message?: string }
      if (!response.ok) throw new Error(result.message || "Submission failed")
      form.reset()
      setStatus("success")
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Submission failed")
      setStatus("error")
    } finally {
      setCaptchaRefreshKey((current) => current + 1)
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 border border-border bg-secondary/40 px-6 py-16 text-center">
        <CheckCircle2 className="size-8 text-brand" aria-hidden="true" />
        <h2 className="font-heading text-lg font-semibold text-foreground">Inquiry Received</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thank you for contacting TIANYU ELECTRIC. Our team will follow up using the contact details you provided.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <FieldGroup>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" name="name" required autoComplete="name" disabled={status === "submitting"} />
          </Field>
          <Field>
            <FieldLabel htmlFor="company">Company</FieldLabel>
            <Input id="company" name="company" required autoComplete="organization" disabled={status === "submitting"} />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" name="email" type="email" required autoComplete="email" disabled={status === "submitting"} />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone / WhatsApp</FieldLabel>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" disabled={status === "submitting"} />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="product">Target Product</FieldLabel>
          <Select name="product" defaultValue={preselectedProduct} disabled={status === "submitting"}>
            <SelectTrigger id="product" className="w-full">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product.slug} value={product.slug}>
                  {resolveLocalizedText(product.shortName)}
                </SelectItem>
              ))}
              <SelectItem value="other">Other / Not Sure</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="requirements">Purchase Requirements</FieldLabel>
          <Input
            id="requirements"
            name="requirements"
            placeholder="e.g. capacity, voltage, quantity, delivery timeline"
            disabled={status === "submitting"}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" name="message" rows={5} required disabled={status === "submitting"} />
        </Field>

        <InquiryCaptchaField refreshKey={captchaRefreshKey} />
      </FieldGroup>

      {status === "error" && (
        <div className="flex items-center gap-2 border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          <span>{errorMessage || "We could not submit your inquiry. Please try again or email us directly."}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="control-feedback w-full bg-brand text-brand-foreground hover:bg-brand-dark sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Spinner className="mr-2 size-4" />
            Sending
          </>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  )
}
