install:
	#cp -n dev.env .env
	./bin/npm install
	./bin/npm run build

run:
	docker compose up -d

stop:
	docker compose down
