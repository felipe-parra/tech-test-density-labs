import PokeballImage from '../../../assets/pokeball.jpg'
export default function PokeballLoader() {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <img style={{
        mixBlendMode: 'multiply'
      }} className="w-16 object-contain bg-white animate-spin" src={PokeballImage} alt="pokeball" />
    </section>
  )
}
