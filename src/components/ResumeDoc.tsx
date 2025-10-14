import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const s = StyleSheet.create({
  page: { backgroundColor:"#ffffff", color:"#111827", padding:28, fontSize:11 },
  h1: { fontSize:20, fontWeight:700, marginBottom:4 },
  sub: { color:"#6b7280", marginBottom:10 },
  h2: { fontSize:14, fontWeight:700, marginTop:10, marginBottom:4, borderBottom:"1px solid #e5e7eb", paddingBottom:4 },
  li: { marginVertical:2 },
  qr: { width:88, height:88, marginTop:6, alignSelf:"flex-start" }
});

export default function ResumeDoc({ data, qrDataUrl }:{ data:any; qrDataUrl?:string }){
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <Text style={s.h1}>{data.name}</Text>
        <Text style={s.sub}>{data.role} • {data.location} • {data.email} • {data.website}</Text>

        <Text style={s.h2}>Summary</Text>
        <Text>{data.summary}</Text>

        <Text style={s.h2}>Skills</Text>
        <Text>{data.skills.join(" • ")}</Text>

        <Text style={s.h2}>Experience</Text>
        {data.experience.map((e:any, i:number)=>(
          <View key={i} style={{ marginBottom:6 }}>
            <Text style={{ fontWeight:700 }}>{e.title} — {e.org}</Text>
            <Text style={{ color:"#6b7280" }}>{e.range}</Text>
            {e.points.map((p:string, j:number)=> <Text key={j} style={s.li}>• {p}</Text>)}
          </View>
        ))}

        <Text style={s.h2}>Education</Text>
        {data.education.map((e:any, i:number)=>(
          <View key={i} style={{ marginBottom:6 }}>
            <Text style={{ fontWeight:700 }}>{e.school}</Text>
            <Text style={{ color:"#6b7280" }}>{e.degree} — {e.range}</Text>
          </View>
        ))}

        {qrDataUrl && <>
          <Text style={s.h2}>Scan</Text>
          <Image style={s.qr} src={qrDataUrl}/>
          <Text>Scan to visit {data.website}</Text>
        </>}
      </Page>
    </Document>
  );
}
