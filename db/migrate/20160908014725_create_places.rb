class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|

      t.string :shape
      t.string :taken
    end
  end
end
