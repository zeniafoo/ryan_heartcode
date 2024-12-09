export default function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url("/heartcodebackground.png")`,
        backgroundPosition: 'center 20%'  // Adjust the value to move the image down
      }}
    >
      <div className="text-white font-bold text-4xl p-4">
        Drugs are BAD BAD BAD
      </div>
    </div>
  );
}