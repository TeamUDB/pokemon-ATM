import { Page, View, Document, StyleSheet, Text } from '@react-pdf/renderer';
import { useState } from "react";
import { Transaction } from "../../services/accouts.services.tsx";

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

type props = {
  records: Transaction[] | undefined;
}

// Create Document Component
export const AccountStatusTemplate = (props: props) => {
  const [accountSelected,] = useState<string>(localStorage.getItem('accountSelected') || "");
  const [dateNow,] = useState<string>(new Date().toLocaleDateString());

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>
          Estado de Cuenta
        </Text>
        <Text style={styles.header}>Fecha: {dateNow} Cuenta: {accountSelected}</Text>
        <Text style={styles.title}>Transacciones</Text>
        <View style={styles.section}>
          {
            props.records?.map((record, index) => (
              <View key={index}>
                <Text>{record.date} {record.concept} $ {Number(record.amount).toFixed(2)}</Text>
              </View>
            ))
          }
        </View>
      </Page>
    </Document>
  )
};