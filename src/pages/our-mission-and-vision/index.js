export default function OurMissionAndVision() {
  return (
    <div>
      <p>Know the Business</p>
      <h2>Our Vision and Mission</h2>
      <Mission />
      <br />
      <Vision />
    </div>
  )
}

function Mission() {
  const missions = [
    'Our mission is to connect Ethiopian businesses with global markets through the export of minerals and agricultural products, fostering sustainable growth in the region.',
    "We're committed to reliable supply chain management, international standards, and customer-centric service to drive economic prosperity in Ethiopia.",
    'We aim to lead in the export of minerals and agricultural products, making a positive impact on communities and striving for operational excellence.',
  ]

  return (
    <div>
      <ul>
        {missions.map((mission) => (
          <li key={mission}>{mission}</li>
        ))}
      </ul>
      <p>Mission</p>
    </div>
  )
}

function Vision() {
  const visions = [
    'Our vision is to be the preferred partner for exporting minerals and agricultural products in Africa, known for excellence and sustainable practices.',
    "We aspire to be a trusted company, forging strong partnerships and contributing to Ethiopia's global trade prominence.",
    'We aim to lead with quality, reliability, and innovation, making Ethiopian products globally recognized for excellence and sustainability.',
  ]
  return (
    <div>
      <ul>
        {visions.map((vision) => (
          <li key={vision}>{vision}</li>
        ))}
      </ul>
      <p>Vision</p>
    </div>
  )
}
