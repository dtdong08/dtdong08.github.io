---
title: Tìm điểm Torricelli của tứ diện bằng phương pháp Weiszfeld
published: 2025-10-05
updated: 2025-10-05
description: Bài viết này trình bày cách áp dụng phương pháp Weiszfeld để giải bài toán Fermat–Weber, từ đó xác định điểm Torricelli của tứ diện
image: ''
tags: [ Hình học, Giải tích ]
category: Toán
draft:  false
---

## Giới thiệu
Một trong những bài toán định vị quan trọng và cơ bản nhất là bài toán Fermat–Weber. Bài toán yêu cầu tìm một điểm sao cho tổng các khoảng cách có trọng số từ điểm đó đến một tập hữu hạn các điểm cho trước là nhỏ nhất.

Bài toán này gắn liền với tên tuổi của Pierre de Fermat, một nhà toán học người Pháp nổi tiếng. Vào đầu thế kỷ XVII, ông đã đặt ra câu hỏi kinh điển:

> Cho ba điểm trên mặt phẳng, hãy tìm điểm thứ tư sao cho tổng các khoảng cách từ điểm đó đến ba điểm đã cho là nhỏ nhất có thể.

Đến đầu thế kỷ XX, Alfred Weber, một nhà kinh tế học người Đức, đã mở rộng bài toán bằng cách thêm trọng số cho từng điểm, nhằm mô tả những tình huống thực tế hơn, chẳng hạn khi các điểm đại diện cho các cơ sở có mức độ quan trọng khác nhau. Nhờ sự mở rộng này, bài toán có thể áp dụng cho nhiều hơn ba điểm, và được biết đến với tên gọi bài toán Fermat–Weber.

## Mô hình hóa bài toán
Bài toán Fermat-Weber có thể được diễn giải bằng toán học như sau:

>Tìm điểm $x \in \mathbb{R}^n$ sao cho $\displaystyle f\left(x\right)=\sum_{i=1}^{m}w_i\lVert x - a_{i} \rVert$ đạt giá trị nhỏ nhất, với $w_{i} > 0$ là trọng số và các vector $a_{1},a_{2},\dots,a_{m} \in \mathbb{R}^n$ tương ứng với các điểm cho trước.

## Phương pháp Weiszfeld
Vào năm 1937, Endre Vaszonyi Weiszfeld, một nhà toán học người Hungary, đã đưa ra một phương pháp để giải quyết bài toán Fermat-Weber bằng đệ quy như sau:

Chọn điểm khởi đầu $x_{0} \in \mathbb{R}^n \backslash \{a_{1},a_{2},\dots,a_{m}\}$. Có thể chọn $x_{0} = \dfrac{\displaystyle \sum_{i = 1}^mw_{i}a_{i}}{m}$

Ta tìm điểm tiếp theo dựa vào công thức $x_{k} = \dfrac{\displaystyle\sum_{i = 1}^{m}\dfrac{w_{i}a_{i}}{\lVert x_{k -1} - a_{i} \rVert}}{\displaystyle\sum_{i = 1}^{m}\dfrac{w_{i}}{\lVert x_{k - 1} - a_{i} \rVert}}$
