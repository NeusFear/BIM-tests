import { useEffect, useState } from "react";
import rhino3dm, { RhinoModule, Sphere } from "rhino3dm";
import { test_three } from "../scripts/test_three";

export default function Home() {

  const [sphere, setSphere] = useState<null | Sphere>(null);

  useEffect(() => { 
    rhino3dm().then((module: RhinoModule) => {
      test_three(module);
    });
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {sphere && <p>{`sphere diameter is: ${sphere.diameter}`}</p>}
      </h1>
    </>
  )
}