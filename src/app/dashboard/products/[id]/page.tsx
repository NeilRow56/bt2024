import { EditForm } from "@/components/dashboard/EditForm";
import db from "@/lib/db";
import { notFound } from "next/navigation";

async function getData(productId: string) {
  const data = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function EditPage({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return <EditForm data={data} />;
}
