const db = require("../db");
const tableQueries = require("../queries/tables");

const init = async () => {
  try {
    await db.query(tableQueries.createDatabase());
    await db.query(tableQueries.createUsers());
    await db.query(tableQueries.createCategories());
    await db.query(tableQueries.createFinances());
    console.log("Successfully created tables");
    await db.end();
    return;
  } catch (error) {
    throw new Error("Error connecting to database", error);
  }
};

init();
