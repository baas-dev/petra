"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataReceived {
  Team: string[]
  Enabled: boolean
  Price: string
  Address: {
    Address: string
    City: string
    State: string
    SuiteNumber: string
    Zip: string
  }
  Borrowers: [
    {
      AnnualIncome: string
      CreditScore: string
      DOB: {
        Day: string
        Month: string
        Year: string
      }
      Expenses: Expense[]
      FirstName: string
      LastName: string
      MaritalStatus: string
    }
  ]
}

interface Expense {
  key: string
  amount: string
}

export default function PrequalRender(props: { Data: string }) {
  let data: DataReceived = JSON.parse(props.Data)
  return (
    <>
      <BorrowerRender Borrowers={data.Borrowers} />
      <div className="flex gap-2">
        <TeamRender team={data.Team} />
        <AddressRender
          address={data.Address}
          enabled={data.Enabled}
          price={data.Price}
        />
      </div>
    </>
  )
}

function TeamRender(props: { team: DataReceived["Team"] }) {
  return (
    <div className="bg-white w-1/2 p-4">
      <Label className="text-xl text-primary">Team Members Credited:</Label>
      <ol>
        {props.team.map((item, i) => {
          return (
            <li className="text-base font-light " key={i}>
              {`${i + 1}: `}
              {item}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function AddressRender({
  enabled,
  address,
  price,
}: {
  address: DataReceived["Address"]
  enabled: boolean
  price: string
}) {
  return (
    <div className="w-full bg-white p-4">
      {enabled ? (
        <>
          <Label className="text-xl text-primary ">Address Information:</Label>
          <Table className="mt-4">
            <TableHeader className="bg-secondary border">
              <TableHead>Street Address</TableHead>
              <TableHead>Suite #</TableHead>
              <TableHead>City</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Zip</TableHead>
              <TableHead>Price Est.</TableHead>
            </TableHeader>
            <TableBody>
              <TableCell>{address.Address} </TableCell>
              <TableCell>{address.SuiteNumber} </TableCell>
              <TableCell>{address.City} </TableCell>
              <TableCell>{address.State} </TableCell>
              <TableCell>{address.Zip} </TableCell>
              <TableCell>{price} </TableCell>
            </TableBody>
          </Table>
        </>
      ) : (
        <>
          <div className="w-full text-center h-full">
            <p className="italic font-light my-auto ">
              The option to add an address was declined.
            </p>
          </div>
        </>
      )}
    </div>
  )
}

function BorrowerRender(props: { Borrowers: DataReceived["Borrowers"] }) {
  const [activeBorrower, setActiveBorrower] = useState(0)

  return (
    <>
      {props.Borrowers.map((item, i) => (
        <>
          <Button
            variant={"outline"}
            key={i}
            className={`${activeBorrower === i ? "bg-primary text-white" : ""}`}
            onClick={() => {
              setActiveBorrower(i)
            }}
          >
            {item.FirstName},{item.LastName}
          </Button>
        </>
      ))}
      <div className="bg-white w-full p-4 my-4">
        <Label className="text-xl text-primary ">Borrower Information:</Label>
        <Table className="my-4">
          <TableHeader className="bg-secondary border">
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Marital Status</TableHead>
            <TableHead>Date of Birth</TableHead>
          </TableHeader>
          <TableBody>
            <TableCell>{props.Borrowers[activeBorrower]?.FirstName}</TableCell>
            <TableCell>{props.Borrowers[activeBorrower]?.LastName}</TableCell>
            <TableCell>
              {props.Borrowers[activeBorrower]?.MaritalStatus}
            </TableCell>
            <TableCell>
              {props.Borrowers[activeBorrower]?.DOB.Month}/
              {props.Borrowers[activeBorrower]?.DOB.Day}/
              {props.Borrowers[activeBorrower]?.DOB.Year}
            </TableCell>
          </TableBody>
          {/* {props.Borrowers.map((item, i) => (
            <></>
          ))} */}
        </Table>
        <Label className="text-xl text-primary ">Financial Information:</Label>
        <Table className="mt-4">
          <TableHeader className="bg-secondary border">
            <TableHead>Annual Income</TableHead>
            <TableHead>Credit Score</TableHead>
            <TableHead>Expenses</TableHead>
          </TableHeader>
          <TableBody>
            <TableCell>
              {props.Borrowers[activeBorrower]?.AnnualIncome}
            </TableCell>
            <TableCell>
              {props.Borrowers[activeBorrower]?.CreditScore}
            </TableCell>
            <TableCell>
              {props.Borrowers[activeBorrower]?.Expenses.map((expense, j) => {
                return (
                  <div>
                    {expense.key}: {expense.amount}
                  </div>
                )
              })}
            </TableCell>
          </TableBody>
        </Table>
      </div>
    </>
  )
}
