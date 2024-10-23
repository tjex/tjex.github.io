# tjex.net

clean:
	rm -rf dist
	mkdir dist
	yarn build

css:
	sass scss/main.scss src/styles/global.css

deploy: 
	rm -rf dist/
	git checkout deploy
	git merge --no-edit main
	make css
	yarn build
	git add -f dist src/styles
	git commit -m "build and deploy"
	git reset --soft HEAD~2
	git commit -m "make deploy"
	git push origin deploy
	git checkout main

