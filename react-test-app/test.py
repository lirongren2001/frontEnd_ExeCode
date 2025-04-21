from collections import deque

t = int(input())
for _ in range(t):
    n, m = map(int, input().split())
    graph = [[] for _ in range(n+1)]  # 存储每个节点的依赖（a必须大于的节点）
    in_degree = [0] * (n+1)
    
    for _ in range(m):
        a, b = map(int, input().split())
        graph[a].append(b)  # a必须大于b，因此b是a的依赖
        in_degree[b] += 1  # 维护入度用于拓扑排序
    
    # 拓扑排序（Kahn算法）
    queue = deque()
    for i in range(1, n+1):
        if in_degree[i] == 0:
            queue.append(i)
    
    order = []
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    
    # 检查是否存在环
    if len(order) != n:
        print(-1)
        continue
    
    # 按拓扑逆序处理（即从没有依赖的节点开始）
    values = [0] * (n+1)
    for node in reversed(order):
        min_val = 100  # 至少为100
        max_dependent = 0
        # 查看所有该节点必须大于的节点，取最大值
        for dependent in graph[node]:
            if values[dependent] > max_dependent:
                max_dependent = values[dependent]
        if max_dependent == 0:
            values[node] = 100
        else:
            values[node] = max_dependent + 10
        # 检查是否满足所有约束
        valid = True
        for dependent in graph[node]:
            if values[node] - values[dependent] < 10:
                valid = False
                break
        if not valid:
            print(-1)
            break
    else:
        print(sum(values[1:]))