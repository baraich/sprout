export default function GroupPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  console.log(params);
  return "GroupPage";
}
