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
    <div className="pt-[2rem] pb-[5rem] bg-[#262626]">
      <div className="flex flex-col gap-[44px] m-auto  max-w-[1211px]">
        <div>
          <img src="/images/vision-and-mission/deco-line.svg" />
          <p className="text-[35px]">Know the Business</p>
          <h2 className="text-[35px] font-bold">Our Vision and Mission</h2>
        </div>
        <br />
        <div className="flex flex-col md:flex-row gap-[65px]">
          <ValueMissionCard
            bulletIcon={'/images/vision-and-mission/target.svg'}
            title={'Mission'}
            statements={missions}
            hasBlueCircle={true}
          />

          <ValueMissionCard
            bulletIcon={'/images/vision-and-mission/setting.svg'}
            title={'Vision'}
            statements={visions}
            hasBlueCircle={false}
          />
        </div>
      </div>
    </div>
  )
}

function ValueMissionCard({ bulletIcon, title, statements, hasBlueCircle }) {
  return (
    <div className="relative flex-1 flex-grow bg flex flex-col">
      <div className="bg-[white] relative border rounded-[23px] text-black z-[2] flex-1 flex flex-col justify-between">
        <NoOverflowRegion />
        <ShiningRegion />

        <div className="gap-y-[22px] flex flex-col p-[35px] relative">
          {statements.map((statement) => (
            <ValueMissionStatement
              key={statement}
              statement={statement}
              bulletIcon={bulletIcon}
            />
          ))}
        </div>
        <h3 className="pb-[22px] text-center text-[32px] font-bold relative">
          {title}
        </h3>
      </div>
      {hasBlueCircle ? (
        <div
          className={
            'bg-gradient-to-b from-[#66F7A9] to-[#00407B] rounded-[100%] w-[72px] h-[72px] absolute left-[-35px] bottom-[-35px] blur-[4px]'
          }
        ></div>
      ) : null}
    </div>
  )
}

function ValueMissionStatement({ statement, bulletIcon }) {
  return (
    <div className="rounded-[25px] border p-5 bg-gradient-to-b from-[#C6C2C6] to-transparent border-[1px] border-[#E7DAED] flex gap-[25px] items-center">
      <img src={bulletIcon} alt="bullet point" />
      <span>{statement}</span>
    </div>
  )
}

function NoOverflowRegion() {
  const commonClass =
    ' rounded-[100%] transform translate-x-[-50%] translate-y-[-50%] absolute blur-[121px] '
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden rounded-[23px]">
      {/* no overflow region */}
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
    </div>
  )
}

function ShiningRegion() {
  const commonClass =
    ' rounded-[100%] transform translate-x-[-50%] translate-y-[-50%] absolute blur-[121px]'
  return (
    <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[75%] w-[80%]">
      <div className="w-[100%] h-[400px] bg-[white] relative border overflow-hidden blur-[74px]">
        <div
          className={
            'bg-[#CECECE] w-[453px] h-[869px] opacity-[67%] top-[-10%] left-[20%]' +
            commonClass
          }
        ></div>
        <div
          className={
            ' bg-[#D4D4D4] w-[284px] h-[547px] top-[33%] left-[85%]' +
            commonClass
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
            'bg-[#ADF475] w-[337px] h-[647px] top-[100%] left-[10%]' +
            commonClass
          }
        ></div>
        {/* shining region */}
      </div>
    </div>
  )
}
