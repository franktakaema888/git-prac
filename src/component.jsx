import { useEffect } from "react";

function Component() {
  useEffect(() => {
    Delete();
  }, []);

  const Delete = () => {
    for (let i = 0; i < 100; i++) {
      console.log(error);
    }
  };
}

export default Component;
