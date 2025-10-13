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
Vào năm 1937, Endre Weiszfeld, một nhà toán học người Hungary, đã đưa ra một phương pháp để giải quyết bài toán Fermat-Weber bằng đệ quy như sau:

Chọn điểm khởi đầu $x_{0} \in \mathbb{R}^n \backslash \{a_{1},a_{2},\dots,a_{m}\}$. Có thể chọn $x_{0} = \dfrac{\displaystyle \sum_{i = 1}^mw_{i}a_{i}}{\displaystyle \sum_{i = 1}^mw_{i}}$

Ta tìm điểm tiếp theo dựa vào công thức sau: $x_{k} = \dfrac{\displaystyle\sum_{i = 1}^{m}\dfrac{w_{i}a_{i}}{\lVert x_{k -1} - a_{i} \rVert}}{\displaystyle\sum_{i = 1}^{m}\dfrac{w_{i}}{\lVert x_{k - 1} - a_{i} \rVert}}$

## Cụ thể hóa bài toán
Thực tế, trong khuôn khổ các bài thi ở cấp THPT, chúng ta thường sẽ chỉ gặp các trường hợp với $\left(m; n\right)=\left(3;2\right)$ ($3$ điểm trong mặt phẳng) hoặc $\left(m;n\right) = (4;3)$ ($4$ điểm trong không gian). Phần còn lại của bài viết này sẽ tập trung vào trường hợp $\left(m; n\right)=\left(4;3\right)$, trường hợp $\left(m;n\right)=\left(3;2\right)$ có thể được xử lý tương tự.

Bài toán: Cho bốn điểm $A\left(x_{A};y_{A};z_{A}\right),B\left(x_{B};y_{B};z_{B}\right),C\left(x_{C};y_{C};z_{C}\right),D\left(x_{D};y_{D};z_{D}\right)$ và bốn hệ số $k_{A},k_{B}, k_{C},k_{D} > 0$. Tìm tọa độ điểm $M$ sao cho tổng khoảng cách $k_{A}\times MA+k_{B}\times MB+k_{C}\times MC+k_{D}\times MD$ đạt giá trị nhỏ nhất.

Vì năng lực tác giả có hạn, chúng ta sẽ giải quyết bài toán này bằng máy tính cầm tay (các dòng máy hỗ trợ chế độ Vector). Các bước xử lý như sau:
- Bước $1$: Lần lượt tạo $4$ vector ba chiều $\text{VctA},\text{VctB},\text{VctC}$ và $\text{VctD}$ với tọa độ tương ứng.
- Bước 2: Ta thực hiện $4$ bước sau, trong đó $\text{UnitV}$ là phép toán "Vector đơn vị"
	- Bước $2.1$: Tính $a = k_{B}\times \text{UnitV}\left(\text{VctB}-\text{VctA}\right)+k_{C}\times \text{UnitV}\left(\text{VctC}-\text{VctA}\right)+k_{D}\times \text{UnitV}\left(\text{VctD}-\text{VctA}\right)$. Nếu $a \leq k_{A}$ thì $M\equiv A$. Nếu không thì thực hiện bước tiếp theo.
	- Bước $2.2$: Tính $b = k_{A}\times \text{UnitV}\left(\text{VctA}-\text{VctB}\right)+k_{C}\times \text{UnitV}\left(\text{VctC}-\text{VctB}\right)+k_{D}\times \text{UnitV}\left(\text{VctD}-\text{VctB}\right)$. Nếu $b \leq k_{B}$ thì $M\equiv B$. Nếu không thì thực hiện bước tiếp theo.
	- Bước $2.3$: Tính $c = k_{A}\times \text{UnitV}\left(\text{VctA}-\text{VctC}\right)+k_{B}\times \text{UnitV}\left(\text{VctB}-\text{VctC}\right)+k_{D}\times \text{UnitV}\left(\text{VctD}-\text{VctC}\right)$. Nếu $c \leq k_{C}$ thì $M\equiv C$. Nếu không thì thực hiện bước tiếp theo.
	- Bước $2.4$: Tính $d = k_{A}\times \text{UnitV}\left(\text{VctA}-\text{VctD}\right)+k_{B}\times \text{UnitV}\left(\text{VctB}-\text{VctD}\right)+k_{C}\times \text{UnitV}\left(\text{VctC}-\text{VctD}\right)$. Nếu $d \leq k_{D}$ thì $M\equiv D$. Nếu không thì thực hiện bước tiếp theo.
- Bước $3$: Tính $\dfrac{k_{A}\text{VctA}+k_{B}\text{VctB}+k_{C}\text{VctC}+k_{D}\text{VctD}}{k_{A}+k_{B}+k_{C}+k_{D}}$. Mục đích của bước này là xây dựng $x_{0}$ và để nó được tự động lưu vào biến $\text{VctAns}$
- Bước $4$: Tính $\dfrac{\dfrac{k_A\times \text{VctA}}{\text{Abs}\left(\text{VctAns}-\text{VctA}\right)}+\dfrac{k_B\times \text{VctB}}{\text{Abs}\left(\text{VctAns}-\text{VctB}\right)}+\dfrac{k_C\times \text{VctC}}{\text{Abs}\left(\text{VctAns}-\text{VctC}\right)}+\dfrac{k_D\times \text{VctD}}{\text{Abs}\left(\text{VctAns}-\text{VctD}\right)}}{\dfrac{k_A}{\text{Abs}\left(\text{VctAns}-\text{VctA}\right)}+\dfrac{k_B}{\text{Abs}\left(\text{VctAns}-\text{VctB}\right)}+\dfrac{k_C}{\text{Abs}\left(\text{VctAns}-\text{VctC}\right)}+\dfrac{k_D }{\text{Abs}\left(\text{VctAns}-\text{VctD}\right)}}$


Liên tục lặp lại bước $4$ cho tới khi cảm thấy hai kết quả liên tiếp khác nhau không nhiều $\big($lệch khoảng $10^{-6}\big)$. Khi đó $\text{VctAns}$ chính là tọa độ điểm $M$ đề bài yêu cầu.
