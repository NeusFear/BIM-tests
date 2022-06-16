import { useEffect, useState } from "react";
import rhino3dm, { RhinoModule, Sphere } from "rhino3dm";

export default function Home() {

  const [sphere, setSphere] = useState<null | Sphere>(null);

  useEffect(() => { 
    rhino3dm().then((Module: RhinoModule) => {
      setSphere(new Module.Sphere([1, 2, 3], 16));
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