import Image from "next/image";

export default function Header() {
  return (
    <div className="p-4 px-5 rounded-br-2xl bg-gray-600 absolute top-0 left-0 text-yellow-300 font-bold text-md flex items-center justify-center">
      <Image src="/logo.svg" alt="logo" width={100} height={32} />
    </div>
  );
}
