
class Person{
  constructor(aboutme){
    this.myObj = aboutme;
  }

  getAll(req, res){
      res.json(this.myObj)
  }

  getProfile(req, res){
    const profile = this.myObj.profile
    res.json(profile)
  }

  getLinks(req, res){
    const anchors = this.myObj.anchors
    const links = []

    for(let i = 0; i < anchors.length; i++){
      links.push(anchors[i].tag)
    }
    res.json(links)
  }
  getLinkContent(req, res){
    const tag =  req.params.id;
    const contents = this.myObj.anchors

    let dataFound = false


    for(let content = 0; content < contents.length; content++){
      if(contents[content].tag === tag){
        dataFound = true
        res.json(contents[content].content)
      }else{
        dataFound = false
      }
    }
    if(!dataFound){
      res.status(500).send("Data couldn't be found!")
    }
  }
}



export default Person;