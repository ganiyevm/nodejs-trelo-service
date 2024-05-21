import query from "../database/db.js";

export const getAllboards = async (req, res) => {
  try {
    const result = await query("SELECT * FROM boards");
    res.status(200).send({ status: "OK", data: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};

export const getoneboards = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await query("SELECT * FROM boards WHERE id=$1", [id]);
    res.status(200).send({ status: "OK", data: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};

export const createboards = async (req, res) => {
  try {
    const { id,title, columns} = req.body;
    const result = await query(
      "INSERT INTO boards (id,title, columns) VALUES ($1, $2, $3)",
      [id, title, columns]
    );
    res.status(200).send({ status: "OK", data: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};
export const deloneboards = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await query("DELETE FROM boards WHERE id=$1", [id]);
      res.status(200).send({ status: "OK", data: result.rows[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Enternal server error" });
    }
  };