import * as React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { docUrl } from "../utils/index";
import Card from "@mui/material/Card";
// const siteConfig = require("../../docusaurus.config");
const versions = require("../../versions.json");
const oldversions = require("../../oldversions.json");

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  const { siteConfig } = useDocusaurusContext();
  const latestStableVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <Layout>
      <div className="tailwind">
        <div className="mt-24 container">
          <h1 className="mb-6">{siteConfig.title} Versions</h1>
          <h3 className="mb-4" id="latest">
            Latest Stable Version
          </h3>
          <p className="mb-2">Latest stable release of Apache Pulsar.</p>
          <Table size="small" sx={{ maxWidth: 500 }}>
            <TableBody>
              <TableRow>
                <TableCell align="left font-bold">
                  {latestStableVersion}
                </TableCell>
                <TableCell align="right">
                  <Link
                    className="text-primary"
                    href={docUrl("standalone", "")}
                    underline="none"
                  >
                    Documentation
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Link
                    className="text-primary"
                    href={`${siteConfig.baseUrl}release-notes#${latestStableVersion}`}
                    underline="none"
                  >
                    Release Notes
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {/* <Table sx={{ maxWidth: 500 }} size="small">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
        </div>
      </div>
    </Layout>
  );
}
