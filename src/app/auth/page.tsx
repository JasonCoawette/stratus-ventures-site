import Button from "@/components/buttons/Button";

export default function Auth() {

  return (
    <main
      className="
        relative flex flex-col
        w-full h-full
        justify-center items-center
        p-4
      "
    >
      <div
        className="
          relative flex flex-col
          w-full max-w-md h-fit
          justify-center items-center
          gap-8
        "
      >
        {/* Header */}
        <div
          className="
            relative flex flex-col
            w-full h-fit
            justify-center items-center
            gap-4
          "
        >
          <h3
            className="
              text-xl text-center text-white
              font-mono font-normal
              leading-none tracking-widest
            "
          >
            [ADMIN LOGIN]
          </h3>

          <h1
            className="
              text-white text-6xl text-center
              font-medium
              leading-tight tracking-tight
            "
          >
            Welcome Back!
          </h1>
        </div>


            {/* Email Input */}

            <Button
              label={"Send Code"}
              className="w-full"
            />
        
      </div>
    </main>
  );
}