import { NextResponse } from "next/server";
import data from "@/data/db.json";

export function GET(req: any, { params }: any) {
  const recordsTable = data.records;

  // get userID from parameter
  const { userID } = params;

  if (userID) {
    const records = recordsTable.filter(
      (record: any) => record.Employee_ID == userID
    );
    return NextResponse.json(records, { status: 200 });
  } else {
    return NextResponse.json("Failed to get records.", { status: 400 });
  }
}
