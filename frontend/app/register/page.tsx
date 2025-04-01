import RegisterForm from "@/components/ui/register-form"
import Link from "next/link"

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        <RegisterForm />
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  )
}

