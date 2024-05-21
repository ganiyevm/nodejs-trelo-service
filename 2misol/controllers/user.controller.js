import query from "../database/db.js";

export const getAllusers = async (req, res) => {
  try {
    const result = await query("SELECT * FROM users");
    res.status(200).send({ status: "OK", data: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};

export const getoneusers = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await query("SELECT * FROM users WHERE id=$1", [id]);
    res.status(200).send({ status: "OK", data: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};

export const createusers = async (req, res) => {
  try {
    const { id,name, email, password} = req.body;
    const result = await query(
      "INSERT INTO users (id,name, email, password) VALUES ($1, $2, $3, $4)",
      [id, name, email, password]
    );
    res.status(200).send({ status: "OK", data: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Enternal server error" });
  }
};
export const deloneusers = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await query("DELETE FROM users WHERE id=$1", [id]);
      res.status(200).send({ status: "OK", data: result.rows[0] });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Enternal server error" });
    }
  };