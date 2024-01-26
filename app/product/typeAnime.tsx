// import { View } from "react-native";

// export default function Page() {
//      const [Animes, setAnimes] = useState<Anime[]>([]);
//      useEffect(() => {
//        fetch("https://dummyjson.com/products")
//          .then((res) => res.json())
//          .then((data) => {
//            const { products } = data;
//            setProducts(products);
//          });
//      }, []);
//     return (
//       <View style={{ flex: 1, backgroundColor: "#fff" }}>
//         <FlatList
//           data={products}
//           keyExtractor={(item) => `${item.id}`}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={{ flexDirection: "row", padding: 16 }}>
//               <Image
//                 style={{ flex: 1 }}
//                 source={{ uri: item.thumbnail }}
//                 width={300}
//                 height={150}
//               />
//               <View style={{ flex: 1, padding: 16 }}>
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     fontSize: 32,
//                     lineHeight: 42,
//                     maxHeight: 84,
//                     overflow: "hidden",
//                   }}
//                 >
//                   {item.title}
//                 </Text>
//                 <Text style={{ fontSize: 16, lineHeight: 24, maxHeight: 72 }}>
//                   {item.description}
//                 </Text>
//                 <Link href={`/product/${item.id}`}>inspect</Link>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     );
// }