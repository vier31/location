import { type Sketch } from "@p5-wrapper/react";
import { lazy, memo, Suspense } from "react";


export const P5Sketch = ({sketch}: { sketch: Sketch}) => {
      
const P5Component = lazy(async ()  => {
    const module = await import("@p5-wrapper/react");
    return { default: module.ReactP5Wrapper };
})

const MemoizedP5 = memo(P5Component);

    return (
        <Suspense fallback={<div>Loading...</div>}>
                <MemoizedP5 sketch={sketch} />
            </Suspense>
    )
}