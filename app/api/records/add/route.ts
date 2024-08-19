import { NextResponse } from "next/server";
import data from "@/data/db.json";

export const POST = async (req: any) => {
  const { timeIn, timeOut, userID } = req.body;

  const recordsTable = data.records;
  
  const newRecord = {
    id: recordsTable.length + 1,
    Employee_ID: userID,
    Time_In: timeIn,
    Time_Out: timeOut,
    Date: new Date().toLocaleDateString(),
  };

  recordsTable.push(newRecord);
  return NextResponse.json(newRecord, { status: 201 });
};
