import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-black text-white hover:bg-gray-900 hover:scale-[1.02] transition",
          },
        }}
      />
    </div>
  );
}
