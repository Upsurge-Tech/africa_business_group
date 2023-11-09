export default function OurMissionAndVision() {
  const visions = [
    'Our vision is to be the preferred partner for exporting minerals and agricultural products in Africa, known for excellence and sustainable practices.',
    "We aspire to be a trusted company, forging strong partnerships and contributing to Ethiopia's global trade prominence.",
    'We aim to lead with quality, reliability, and innovation, making Ethiopian products globally recognized for excellence and sustainability.',
  ]
  const missions = [
    'Our mission is to connect Ethiopian businesses with global markets through the export of minerals and agricultural products, fostering sustainable growth in the region.',
    "We're committed to reliable supply chain management, international standards, and customer-centric service to drive economic prosperity in Ethiopia.",
    'We aim to lead in the export of minerals and agricultural products, making a positive impact on communities and striving for operational excellence.',
  ]

  return (
    <div>
      <p>Know the Business</p>
      <h2>Our Vision and Mission</h2>
      <br />
      <ValueMissionCard />
    </div>
  )
}

function ValueMissionCard({ bulletIcon, title, statements }) {
  const commonClass =
    ' rounded-[100%] transform translate-x-[-50%] translate-y-[-50%] absolute blur-[121px]'
  return (
    <div className="h-[477px] bg-[white] relative border overflow-hidden rounded-[23px]">
      {/* eclipses */}
      <div
        className={
          'bg-[#ADADAD] w-[545px] h-[1047px] opacity-[67%] top-[-40%] left-[20%] ' +
          commonClass
        }
      ></div>
      <div
        className={
          'bg-[#D4D4D4] w-[343px] h-[658px] opacity-[58%] top-[40%] left-[90%] ' +
          commonClass
        }
      ></div>
      <div
        className={
          'bg-[#979797] w-[406px] h-[780px] opacity-[67%] top-[100%] left-[75%]' +
          commonClass
        }
      ></div>
      <div className="absolute w-[80%] transform translate-x-[-50%] translate-y-[-50%] top-[80%] bg-red ">
        ddd
      </div>
      here
    </div>
  )
}

function ShiningRegion() {
  const commonClass =
    ' rounded-[100%] transform translate-x-[-50%] translate-y-[-50%] absolute blur-[121px]'
  return (
    <div className="h-[500px] bg-[white] relative border overflow-hidden blur-[74px] ">
      <div
        className={
          'bg-[#CECECE] w-[453px] h-[869px] opacity-[67%] top-[-10%] left-[20%]' +
          commonClass
        }
      ></div>
      <div
        className={
          ' bg-[#D4D4D4] w-[284px] h-[547px] top-[33%] left-[85%]' + commonClass
        }
      ></div>

      <div
        className={
          'bg-[#979797] w-[337px] h-[647px] opacity-[67%] top-[100%] left-[75%]' +
          commonClass
        }
      ></div>

      <div
        className={
          'bg-[#ADF475] w-[337px] h-[647px] top-[100%] left-[10%]' + commonClass
        }
      ></div>
      {/* shining region */}
    </div>
  )
}
