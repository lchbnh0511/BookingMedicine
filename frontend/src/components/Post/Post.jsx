import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';



const mainFeaturedPost = {
  title: 'Kê Đơn Thuốc Trực Tuyến',
  description:
    "Cung cấp dịch vụ kê đơn thuốc trực tuyến, giúp bạn dễ dàng tìm kiếm và kê đơn các loại thuốc cần thiết cho bệnh nhân. Với cơ sở dữ liệu đa dạng và phong phú về các loại thuốc, bạn có thể dễ dàng tìm thấy thông tin về thuốc và chọn chỉ trong vài bước đơn giản !",
  image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8/ODM4Nyg5LjcBCgoKDQ0NDg0NDisZFRkrKys3Ky0tLSsrKy0rKysrLSsrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgA/QMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAgADBAb/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBQT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7WRUEi5H2PGaRUjRUiK0ioFSA0hxjgMxxsQZjhwEsrGwVLKsGCJwYplEhQESKoUE2JWBEWBVFVEUVVFBFTViiIxFjpYnFHoipBFRG1QiKiKS0IrKgUgCxBmZhWhZhAxAAKAiQoYCQoKiQqxIiamrsTVRNTVUUEpq6miJqV1KjvFxMVGXRUMCoBMBiKphFQGIIMWYVmZhGYgGFLUEhQESFCgmpqqFRNTVUURFFVUqiRVVNETQqpB3iomLiOioRDAMVEwwVRBQLMYKWDAWZgZmYGBAjCtWETQoAmpqqKqJopooiamqqaqJopooiQpIO0VERcR0VFRMVAMMEVEUkGAygwFmYUggRiwBmYAQzCAMAapqkqgqaqiiJqaqpqompVQIkKoBcXERcR0VFRMUBiomGIqmBAkEUsGAszCEMwMGYGBAgZhQApFVAKRRE0U0URFYiqJoNAiouOcq4ja4qOcVBVwpioBhBRVMI2gWbWAsGAsCDBgIQwAhhQYMFRgU0BRSKIKmmiqiaKaBBKuVylXKNukVHOVcqC4qIlOirKIqIHSkgSG0UswEUwYGYMDMwBmYCNQwUYUgRNBoAVNVU1UFTVUCOUXK5Rco06SrjlKuUV0lMRKqVBZRKrRVFOtoKOp06BKW1BTanW0FAawEMAIbQqEVhQYMKIwpFBIpoqoKmkA4SqlcZXSUV0i5XKVUoOsVK5SrlFdJTrnKrUF6dRpBbanToKbU62iq1tTraIrW1I0FaydbQLDW0DQNYRmGigRRaFCmmpojVNpqQeWLlcpVSg6yqlcpVSg6yqlcpVSiusp1EplB00yuenQdNaVGnUV01kadA62p1tBWtqdYRWgMB1gwFktoEa1CjBhaIamtoBrUmp0R4pVyuUqpVV1ipXKVUoOuqlcpVSoOsp1zlMoOkplRKZRXTTrnp0HSVtc9OgvW1GnQXo1OtoitKNbRVa2p1hFaNTraCtGjWA6NA0CKNFoNaNFoEeCVcrMqqlMrMCtMrMCpVSswK06zIGVtLAdbWYG06zA2nWYG1tZgbWZgGtrMDaNLANTazANa0MA0azKj/2Q==',
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Thêm 55 loại thuốc, nguyên liệu làm thuốc được gia hạn lưu hành do ảnh hưởng của dịch COVID-19',
    description:
      'Bộ Y tế vừa công bố đợt 4 đối với 55 loại thuốc, nguyên liệu làm thuốc được gia hạn đăng ký lưu hành...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5JOyENvS5Ip8LsOKsgMMOFJK4XtZloXPwg&usqp=CAU',
    imageText: 'Image Text',
  },
  {
    title: 'Đề xuất 315 loại thuốc thuộc danh mục được áp dụng đàm phán giá',
    description:
      'Bộ Y tế đang dự thảo thông tư ban hành danh mục thuốc, vật tư xét nghiệm, thiết bị y tế được áp dụng hình thức đàm phán giá và quy định quy trình, thủ tục ..',
    image: 'https://thoibaotaichinhvietnam.vn/stores/news_dataimages/2023/122023/03/18/in_article/de-xuat-315-loai-thuoc-thuoc-danh-muc-duoc-ap-dung-dam-phan-gia-20231203183417.gif?rt=20231203183420',
    imageText: 'Image Text',
  },
];


export default function Blog() {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: "200px" }}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost}  />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer title="Health Care" description="Kê đơn thuốc trực tuyến" />
    </React.Fragment>
  );
}