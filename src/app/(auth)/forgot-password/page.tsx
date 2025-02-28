"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/grid-pattern-background";
import Link from "next/link";
import { Sprout, Mail, ArrowRight, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setIsSubmitted(true);
    } catch (err) {
      console.log(err);
      setError("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <AnimatedGridPattern
        className="absolute inset-0 -z-10 opacity-50 dark:opacity-20"
        width={32}
        height={32}
        strokeDasharray={2}
        numSquares={35}
        maxOpacity={0.3}
        duration={3}
      />
      <Card className="border border-primary/20 bg-card/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Sprout className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            {isSubmitted ? "Check your email" : "Reset your password"}
          </CardTitle>
          <CardDescription className="text-center">
            {isSubmitted
              ? "We've sent you a link to reset your password. Please check your inbox."
              : "Enter your email address and we'll send you a link to reset your password"}
          </CardDescription>
          {error && (
            <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
              {error}
            </div>
          )}
        </CardHeader>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full group"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending reset link..."
                ) : (
                  <>
                    Send reset link
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
              <div className="text-center text-sm">
                <Link
                  href="/login"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  <ArrowLeft className="h-3 w-3" />
                  Back to login
                </Link>
              </div>
            </CardFooter>
          </form>
        ) : (
          <CardFooter className="flex flex-col space-y-4 pt-6">
            <Button
              className="w-full group"
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
              }}
            >
              Try another email
            </Button>
            <div className="text-center text-sm">
              <Link
                href="/login"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                <ArrowLeft className="h-3 w-3" />
                Back to login
              </Link>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
