import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    lineHeight: 1.4,
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
  },

  heading: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 13,
  },

  itemTitle: {
    fontSize: 11,
  },

  itemMeta: {
    color: "#666",
    marginBottom: 4,
  },
});

export function CVDocument({
  profile,
  experiences,
  publications,
}: any) {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>

        <Text style={styles.title}>
          {profile.name}
        </Text>

        <Text>
          {profile.location}
        </Text>

        <Text>
          {profile.email}
        </Text>

        <Text>
          {profile.linkedin}
        </Text>

        <Text style={styles.heading}>
          Experience
        </Text>

        {experiences.map((exp: any) => (
          <View key={exp.slug}>
            <Text style={styles.itemTitle}>
              {exp.title}
            </Text>

            <Text style={styles.itemMeta}>
              {exp.organization} • {exp.start}–{exp.end}
            </Text>
          </View>
        ))}

        <Text style={styles.heading}>
          Publications
        </Text>

        {publications.map((pub: any) => (
          <View key={pub.slug}>
            <Text>{pub.title}</Text>
            <Text style={styles.itemMeta}>
              {pub.venue}
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
