import { clerkMiddleware } from "@clerk/nextjs/server";

export default function handler(req, res) {
  try {
    // Run the Clerk middleware
    return clerkMiddleware()(req, res);
  } catch (error) {
    // Log the error for debugging
    console.error("Error in middleware:", error);

    // Return a 500 status code with an error message
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};