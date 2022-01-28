
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
    const contents = this.myObj.anchors

    let data = false;

    for(let i =0; i < contents.length; i++){
     if(contents[i].tag === req.params.id){
       data = true
       res.json(contents[i])
     }
    }
    if(!data){
        res.send("hello")
    }
    
  }
}



export default Person;