import fs from "node:fs/promises"

async function main() {
    const data = await fs.readFile("productos.csv", "utf8");
    const productosArrayStrings = data.split("\n");
    const productosArrayData = productosArrayStrings.map((string) =>
        string.split(",")
    );
    console.log(productosArrayData);
}


main();