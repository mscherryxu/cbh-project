# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket #1: Create custom ID for each agent in facilities

#### **Acceptance criteria**

- Create a join/through table between Facilities and Agents tables to create a foreign key connecting both tables
- Create a join/through table between Agents and Shifts tables to get data on the shifts each agent took

#### **Time/effort estimates**

- 3 hours

#### **Implementation details**

1) Create through table using one-to-many relationship between Agent and Shifts, respectively
   - This creates a foreign key between the Agents and Shifts tables.

2) Create through table using many-to-many relationship between Facilities and Agents, respectively (if agents can work at multiple facilities).
   - However, if agents can only work at one facility, it would be a one-to-many relationship between Facilities and Agents, respectively.
   - Creating foreign key in the join table, which could be used as the custom ID for each agent in facility. Each agent is connected through Shifts table to get Shifts data for each agent.

### Ticket #2: getShiftsByFacility takes in custom ID to get agent's shift information and generates report via generateReport

#### **Acceptance criteria**

- Add a helper function to return data of specific agent via custom ID created in through table

#### **Time/effort estimates**

- 2 hours

#### **Implementation details**

1) Create a helper function that takes in a custom ID.
   - Helper function `getShiftsByAgent(customAgentID)` will return all shifts specific agent took.
   - Include helper function in `getShiftsByFacility`, so all shifts from quarter are returned for that specific agent.

2) `generateReport` function can use helper function `getShiftsByAgent(customAgentId)` to generate report for each agent