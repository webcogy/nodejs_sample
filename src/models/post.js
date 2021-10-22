import mongoose from "mongoose";


const { Schema } = mongoose;



const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], // 문자열로 이루어진 배열
    publishedDate: {
        type: Date,
        default: Date.now, // 현재 날짜를 기본값으로 지정
    },
});



const Post = mongoose.model("Post", PostSchema);
//  첫 번째 파라미터는 스키마 이름이고, 두 번째 파라미터는 스키마 객체입니다. 데이터베이스는 스키마 이름을 정해 주면 그 이름의 복수 형태로 데이터베이스에 컬렉션 이름을 만듭니다.
// 이 컨벤션을 따르고 싶지 않다면, 다음 코드처럼 세 번째 파라미터에 여러분이 원하는 이름을 입력하면 됩니다.
// mongoose.model('Post', PostSchema, 'custom_book_collection');


export default Post;