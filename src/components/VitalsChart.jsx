import DonorInfo from "./DonorInfo";
import VitalsTable from "./VitalsTable";

export default function VitalsChart() {
  return (
    <main id="main">
      <section className="screening-info">
        <DonorInfo />
        <VitalsTable />
      </section>
    </main>
  );
}
