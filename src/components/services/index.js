export default function Services() {
  const text1 = {
    title: 'Export and distribution of industrial and construction minerals.',
    content: `
          Our expertise in mineral export includes industrial and construction
          minerals. We excel in quality control, reliable supply, and adherence
          to international standards, ensuring you can trust us as your partner
          in this sector.
        `,
    onReadMore: () => alert('card1 clicked'),
  }

  const text2 = {
    title: 'Export of agricultural products',
    content: `
                Our agricultural product export services cover a wide range of
                items, including avocados, livestock, and perishable goods. We
                prioritize freshness and international compliance, offering a
                comprehensive solution for businesses looking to expand their
                agricultural exports.
              `,
    onReadMore: () => alert('card2 clicked'),
  }

  const images1 = (
    <div className="flex ">
      {/* images */}
      <img
        className="flex-1 min-w-0 object-cover"
        src="/images/services/coal.jpg"
      />
      <div className="flex-1 flex flex-col">
        <img
          className="flex-[5] min-w-0 object-cover"
          src="/images/services/red-salt.jpg"
        />
        <img
          className="flex-[3] min-w-0 object-cover"
          src="/images/services/white-rocks.jpg"
        />
      </div>
    </div>
  )

  const images2 = (
    <div className="flex">
      {/* images  */}
      <img
        className="flex-1 min-w-0 object-cover "
        src="/images/services/avocado.jpg"
      />
      <img
        className="flex-1 min-w-0 object-cover"
        src="/images/services/cattle.jpg"
      />
    </div>
  )

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black min-h-[128px]">
        {/* header */}
        <img src="/images/services/deco-line.svg" />
        <h2 className="text-white text-[35px]">Services</h2>
      </div>

      <div className="p-[2rem]">
        <div className=" text-[#4A5568] flex flex-col gap-[81px]">
          <ServicesCard
            imageComponent={images1}
            title={text1.title}
            content={text1.content}
            onReadMore={text1.onReadMore}
          />

          <ServicesCard
            imageComponent={images2}
            title={text2.title}
            content={text2.content}
            onReadMore={text2.onReadMore}
          />
        </div>
      </div>
    </>
  )
}
function ReadMoreButton({ onClick }) {
  return (
    <div className="flex justify-end">
      <button className="text-[#00407B] font-semibold text-[14px]">
        Read more &gt;
      </button>
    </div>
  )
}

function ServicesCard({ imageComponent, title, content, onReadMore }) {
  return (
    <div className="bg-[#F1F2FF] rounded-[30px] border">
      {imageComponent}

      <div className="p-5 flex flex-col gap-[30px]">
        <h3 className="text-[28px] text-[#2D3748] font-semibold">{title}</h3>
        <p>{content}</p>
        <ReadMoreButton onClick={onReadMore} />
      </div>
    </div>
  )
}
