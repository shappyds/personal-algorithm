class Graph {
  constructor (num) {
    this.v = num  // 顶点的个数
    this.adj = [] // 邻接表
    for (let i = 0; i < num; i++) {
      this.adj[i] = []    
    } 
  }

  // 新增边，无向图一条边存两次
  addEdge(s, t) {
    this.adj[s].push(t)
    this.adj[t].push(s)
  }

  /**
 * 广度搜索
 * @param {*} s 起点
 * @param {*} t 终点
 */
  bfs(s, t) {
    if( s === t) return 

    let visited = [] // 已访问的顶点
    let queue = [] // 已经被访问，但是相邻的顶点还没被访问的顶点
    let prev = [] // 记录搜索路径
    visited[s] = true // 起点设为已访问
    queue.push(s) // 起点加入队列

    for (let i = 0; i < this.v; i++) {
      prev[i] = -1      
    }
    
    while(queue.length) {
      // 当前待处理的顶点
      let w = queue.shift()
      for (let i = 0; i < this.adj[w].length; i++) {
        let q = this.adj[w][i] // 顶点相连的顶点
        if(!visited[q]) {
          prev[q] = w
          if (q === t) {
            this.print(prev, s, t)
            return
          }
          visited[q] = true
          queue.push(q)
        }        
      }
    }
  }

  print(prev, s, t) {
    if(prev[t] !== -1 && t !== s) {
      this.print(prev, s, prev[t])
    }
    console.log(t);
  }
}