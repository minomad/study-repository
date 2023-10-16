# stash

브랜치를 만들고 checkout이나 merge 할 때 커밋을 해야 하는데  
아직 작업이 다 완성이 안되어서 커밋을 하지 못할 때 사용

```bash
git stash

git stash list

#가장 최근 stash 가져오기
git stash apply

#특정 stash 가져오기
git stash apply stash@{1}

#가장 최근 stash 지우기
git stash drop

#특정 최근 stash 지우기
git stash drop stash@{1}

#모두 지우기
git stash clear

#최근 stash 적용하고 stack도 지움
git stash pop

#원하는 이름으로 저장
git stash save 이름

```
