

export const LISTDATA = [
  
  {
    id: 1,
    title: '서울',
    regions: '서울',
    image: "https://t3.gstatic.com/images?q=tbn:ANd9GcQQo_JkDn0lCzZNQuwRM5KPzglI-OKp4FMI4lZEusm_U3Ii8YncQzRbUcNQEnKXzHSykImWfs51R-o8O0DEYOwoMg",
    subtitle: 'seoul',
  },
  {
    id: 2,
    title: '제주',regions: '제주',
    image: "https://t0.gstatic.com/images?q=tbn:ANd9GcT2WB0FeFdygbjH0BnCm02cOJYqlwLrORLnvbwUM8QKrDTKcEyN1b5CxUSG5gjG2Y0Unp4ixEXElEJF-cEWnE_6ug",
    subtitle: 'jeju',
  },
  {
    id: 3,
    title: '부산',
    regions: '부산',
    image: "https://t3.gstatic.com/images?q=tbn:ANd9GcR1P8cjYNU8USUv0RElEuYTPysbK3HcdmLYJRmHKKrGEem8XrayQd2Rs3jhuMHoExJZBdJY-7X28Q0jMPRj7-HFzQ",
    subtitle: 'busan',
  },
  {
    id: 4,
    title: '강릉, 양양',regions: '강릉, 양양',
    image: "https://t1.gstatic.com/images?q=tbn:ANd9GcTjpAZoNZHTuF38-FoFnmFySBpBtm8DtY9wsm9NEGT7jHZnz4G06lp73JgywuDNH_1nnzhDMlZnqj94TjQobEh_WA",
    subtitle: 'Gangneung, Yangyang',
    coordinate: 'latitude: 38.119546, longitude: 128.465551, latitudeDelta: 0.0922,  longitudeDelta: 0.0421,',
    callId:'Gangwon'
  },
  {
    id: 5,
    title: '전주',regions: '전주',
    image: "https://t1.gstatic.com/images?q=tbn:ANd9GcRxyPnL1K8pmU7s_noE1lmrRcwhppKHErhv1iRpU5Yqm7bQVie6HcCAZreaeivic6PVBYxgP-bwt2fnMCeBpoJzSA",
    subtitle: 'Jeonju',
   
    coordinate: 'latitude: 35.82361, longitude:  127.14806, latitudeDelta: 0.0922,  longitudeDelta: 0.0421,',
    callId: "Jeonju"
  },
  {
    id: 6,
    title: '태안',regions: '태안',
    image: "data:image/jpeg;base64,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",
    subtitle: 'Taean',
    description:'중원문화의 중심지로서 한반도의 중앙, 찬란한 문화의 꽃을 피워온 역사의 고장.',
    
    callId: 'Taean'
  },
  {
    id: 7,
    title: '여수',regions: '여수',
    image: "https://t1.daumcdn.net/cfile/tistory/2176C933560CEC8E0A",
    subtitle: 'Yeosu',
    
    callId: 'Yeosu'
  },
  

]