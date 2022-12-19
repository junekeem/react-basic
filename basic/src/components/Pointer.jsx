export default function Pointer({ coordinate }) {
  return (
    <div id="pointer" className="pointer"
         style={{ left: `${coordinate.coordinateX - 15}px`, top: `${coordinate.coordinateY - 15}px` }}></div>
  )
}