import { FocusCards } from "./ui/focus-cards"

export default function Theme(){
    return <div className="w-full bg-gray-900 h-auto py-10 items-center">
      <div className="w-full h-[100%]">

      <FocusCardsDemo />
      </div>
    
  </div>
}

export function FocusCardsDemo() {
  const cards = [
    {

      title: "Open Innovation",
      src:"https://drive.google.com/uc?export=view&id=1f5Be7v_jAZg8MRymAl5M2Dq00yc3KrIN"
    },
    {
      title: "Artificial Intelligence",
      src: "https://drive.google.com/uc?export=view&id=1v0XuqQfEJXPDDIh-zQWJsTr6WA05hPc_",
    },
    {
      title: "Web 3",
      src: "https://drive.google.com/uc?export=view&id=10Pa2sL73Z77HH5gnFDomORba5FXKxoOR",
    },
    {
      title: "Ed. Tech",
      src: "https://drive.google.com/uc?export=view&id=1gXHP1xVbLAEgPSuk13RwLzDd7N-ewFIx",
    },
    {
      title: "I.O.T",
      src: "https://drive.google.com/uc?export=view&id=12ijsg05pNwGNrw-xb5jpRdbJr0qqVIPs",
    },
    {
      title: "Med. Tech",
      src: "https://drive.google.com/uc?export=view&id=1tw70wjVp22Y3noBQlaqm_bRQQFx1IpKP",
    },
  ];
 
  return <FocusCards cards={cards} />;
}