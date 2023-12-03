import { Page, Document, StyleSheet, Text } from '@react-pdf/renderer';
import { useState } from "react";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    flexGrow: 1
  },
  header: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
  }
});


// Create Document Component
export const DepositTemplate = () => {
  const [accountSelected,] = useState<string>(localStorage.getItem('accountSelected') || "");
  const [amountSelected, ] = useState<string>(localStorage.getItem('amountSelected') || "");
  const [dateNow,] = useState<string>(new Date().toLocaleDateString());

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>
          Deposito de Efectivo
        </Text>
        <Text style={styles.header}>Fecha: {dateNow} Cuenta: {accountSelected}</Text>
        <Text >Concepto: Deposito de Efectivo</Text>
        <Text >Monto: $ {amountSelected}</Text>
      </Page>
    </Document>
  )
};