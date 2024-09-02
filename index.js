class Exams {
  #resposta;
  #maior;
  #menor;
  #map;
  #pontuação;
  

    constructor(resposta = [] , peso = [2,2,2,2,2]){
      this.peso = peso
      this.#resposta = resposta
      this.#maior = 0
      this.#menor = 999
      this.acumulado = 0
      this.#map = new Map()
      this.qnt_provas = 0
      this.#pontuação = []
      
      

    }  
    tentativa(exame = [],nome){
      let pontos = 0
      for (let i = 0;i <  this.#resposta.length ;i++){
        if (this.#resposta[i] === exame[i]){
          pontos += this.peso[i]
          
        }
      }
      if (pontos > (this.#maior)){
         this.#maior = pontos
      }
      if (pontos < (this.#menor)){
        this.#menor = pontos
      }
      this.#map.set(nome,exame)
      this.acumulado += pontos
      this.qnt_provas += 1
      this.#pontuação.push(pontos)
      //console.log(pontos)
      
        
        // [[abcde],[aaa],[bbb],[ccc]]
          
      
        
      

    }
    getGrade(){
      return this.#pontuação
    }
    getAluno(chave){
      const str = chave.toString()
      return this.#map.get(str)     
    }

    getAvg(){
      return this.acumulado / this.qnt_provas
    }


    getMin(){
      return this.#menor
    }

    getMax(){
      return this.#maior
    }

    lt(nota){
      const result = []
      for (let i = 0 ; i <= this.qnt_provas ; i++){
        if (nota > this.#pontuação[i]){
          result.push(this.#pontuação[i])
        }
      }
    return result
        
      
    }
    gt(nota){
      const result = []
      for (let i = 0 ; i <= this.qnt_provas ; i++){
        if (nota < this.#pontuação[i]){
          result.push(this.#pontuação[i])
        }
      }
      return result   
}
}


const a = new Exams(['a','b','c','d','e'])
a.tentativa(['a', 'b' ,'c','d','e'], 'João')
// 10
a.tentativa(['a', 'b' ,'c','d','d'], 'Flamis')
// 8
a.tentativa(['a', 'b' ,'c','e','d'], 'Prego')
// 6
a.tentativa(['b', 'b' ,'c','e','d'], 'Pedro')
// 4
a.tentativa(['a', 'a' ,'a','a','a'], 'JJ')
// 2
a.tentativa(['e', 'a' ,'a','a','a'], 'Jamis')
// 0 



