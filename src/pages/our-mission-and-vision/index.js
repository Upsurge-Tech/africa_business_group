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
      <p className="text-[35px]">Know the Business</p>
      <h2 className="text-[35px] font-bold">Our Vision and Mission</h2>
      <br />
      <ValueMissionCard
        bulletIcon={''}
        title={'Mission'}
        statements={missions}
      />

      <ValueMissionCard bulletIcon={''} title={'Vision'} statements={visions} />
    </div>
  )
}

function ValueMissionCard({ bulletIcon, title, statements }) {
  const commonClass =
    ' rounded-[100%] transform translate-x-[-50%] translate-y-[-50%] absolute blur-[121px]'
  return (
    <div className="bg-[white] relative border overflow-hidden rounded-[23px] text-black p-[35px]">
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
        }div
      ></div>
      <div
        className={
          'bg-[#979797] w-[406px] h-[780px] opacity-[67%] top-[100%] left-[75%]' +
          commonClass
        }
      ></div>

      {/* end eclipses */}

      <div className="gap-[22px] flex flex-col z-[99]">
        {statements.map((statement) => (
          <ValueMissionStatement
            key={statement}
            statement={statement}
            bulletIcon={bulletIcon}
          />
        ))}
        <h3 className="text-center text-[32px] font-bold">{title}</h3>
      </div>
    </div>
  )
}

function ValueMissionStatement({ statement, bulletIcon }) {
  return (
    <div className="rounded-[25px] border p-5 bg-gradient-to-b from-[#C6C2C6] to-transparent border-[1px] border-[#E7DAED] flex gap-[25px] items-center">
      <span>img</span>
      <span>{statement}</span>
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
