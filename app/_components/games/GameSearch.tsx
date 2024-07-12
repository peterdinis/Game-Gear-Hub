import { Input } from "@/components/ui/input";
import { FC } from "react";

const GameSearch: FC = () => {
    return (
        <div className="mt-5">
				<form>
					<Input
						placeholder="Search..."
					/>
				</form>
			</div>
    )
}

export default GameSearch;