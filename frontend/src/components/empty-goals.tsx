import { useState, useEffect } from "react";
import logo from "../assets/logo-in-orbit.svg";
import letsStart from "../assets/lets-start-illustration.svg";
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export function EmptyGoals() {
  const [inView, setInView] = useState(false);
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInView(true);
    }, 3000);

    const interval = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center gap-8 animate__animated ${
        inView ? "animate__fadeInUp" : "opacity-0"
      }`}
    >
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="in.orbit" />

      <p
        className={`animate__animated max-w-[90vw] md:max-w-[40vw] animate__fadeInRight 
          mt-[1.5rem] min-h-[4rem] text-xl font-light delay-75 md:min-h-fit opacity-50`}
        key={showFirstText ? "text1" : "text2"}
      >
        {showFirstText
          ? "Você ainda não cadastrou nenhuma meta"
          : "Que tal cadastrar um agora mesmo?"}
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
